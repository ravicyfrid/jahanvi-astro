import { Header, Footer, Slider, PlayStore, CTA, HeroBanner, ContactUs } from "@/components";
import SEOHead from "@/components/seo";
import { gemsService } from "@/services";
import { bioService } from "@/services/bio.serivce";
import { _Object } from "@/utils/interfaces";
import { GetStaticProps } from "next";

export default function Home(props: _Object) {
  return (
    <>
      <SEOHead title="Jahanvi Astro" />
      <Header />
      <HeroBanner props={props.bioData} />
      <Slider props={props.gemstons}/>
      <CTA />
      <PlayStore />
      <ContactUs />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const bioData: _Object = await bioService.getBio();
    const gemstons: _Object = await gemsService.getGems();

    // Sanitize data for JSON serialization
    const sanitizedBioData = JSON.parse(JSON.stringify(bioData));
    const sanitizedGemstons = JSON.parse(JSON.stringify(gemstons));

    return {
      props: {
        bioData: sanitizedBioData,
        gemstons: sanitizedGemstons,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Handle errors gracefully
    return {
      props: {
        bioData: null,
        gemstons: null,
        error: "An error occurred",
      },
    };
  }
};
