import { PlaceHolder } from '@/assets/images';
import { Button } from '@/components';
import { ordersService } from '@/services';
import formatDateParts from '@/utils/custom-hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function getAvatarName(name?: string) {
  if (!name || typeof name !== 'string') return 'Y';
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map(w => w[0].toUpperCase()).join('') || 'Y';
}

export default function BookingPage() {
  const [results, setResults] = React.useState<any>({})
  const router = useRouter()
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    ordersService.GetOrderDetails(id).then(res => {
      console.log(res)
      setResults(res)
    }).catch(err => {
      console.error(err)
    })
  }, [id])

  return (
    <div className="container py-3 position-relative" style={{ minHeight: '100vh', paddingBottom: '92px' }}>
      <h5 className="card-title text-black d-flex align-items-center gap-2 mb-1">
        <Link href="/my-booking">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
            <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></Link>
        Booking Details
      </h5>
      {/* Card */}
      <div className="card border-0 shadow-sm">
        <div className="card-body position-relative">

          {/* Header row */}
          <div className="d-flex align-items-center">
            <div className="avatar-circle me-3 flex-shrink-0">
              {results?.images?.path ? (
                <img
                  src={results.images?.path || PlaceHolder}
                  alt={results?.full_name || 'User'}
                  className="avatar-img"
                />
              ) : (
                <span>{getAvatarName(results?.full_name)}</span>
              )}
            </div>
            <div className="flex-grow-1">
              <div className="fw-semibold">{results?.full_name}</div>
              <div className="text-muted small">{results?.phone_number}</div>
            </div>

            {/* Date badge */}
            <div className="ms-2">
              <div className="date-badge text-center">
                <div className="small text-muted">{formatDateParts(results.created_at).fullDate}</div>
                <div className="display-6 lh-1 fw-semibold">{formatDateParts(results.created_at).dayOnly}</div>
                <div className="small text-muted">{formatDateParts(results.created_at).timeOnly}</div>
              </div>
            </div>
          </div>

          <hr className="my-3" />

          {/* Details two-column */}
          <div className="row">
            <div className="col-6">
              <div className="fw-semibold mb-1">Booking ID:</div>
              <div className="text-muted">{results.order_number}</div>
            </div>
            <div className="col-6 text-end">
              <div className="fw-semibold mb-1">Consultant Fee:</div>
              <div className="text-muted">{results?.total_price}</div>
            </div>
          </div>

          <div className="mt-3">
            <div className="fw-semibold mb-1">Booking Note:</div>
            <div className="text-muted">{results?.order_note}</div>
          </div>
        </div>
      </div>
      <div
        className="fixed-bottom py-3 d-flex justify-content-center"
      >
        <div style={{ maxWidth: '100%' }}>
          <Button
            label="Chat"
            className="primary  rounded-pill mt-3"
            type="button"
            onClick={() =>
              router.push(`/chat/${results?.chat?.id}/${results?.order_number}`)
            }
          />
        </div>
      </div>
      <style jsx>{`
        .avatar-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e9ecef;
          color: #6c757d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          text-transform: uppercase;
        }
        .date-badge {
          min-width: 78px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 1rem;
          padding: .35rem .6rem;
        }
        @media (max-width: 400px) {
          .date-badge { min-width: 68px; }
        }
      `}</style>
    </div>
  );
}
