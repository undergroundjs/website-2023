import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const CodeOfConductPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <h2>Code of Conduct</h2>
        <p className="mb-8">
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organizers will
          enforce this code throughout the event. We are expecting cooperation
          from all participants to help ensuring a safe environment for
          everybody.
        </p>
        <h2>Need Help?</h2>
        <p className="mb-8">
          Email us at{" "}
          <a href="mailto:incidents@undergroundjs.com">
            incidents@undergroundjs.com
          </a>
        </p>
        <h3 className="text-black">The Quick Version</h3>
        <p className="mb-8">
          Our conference is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, or religion (or lack thereof). We do not tolerate
          harassment of conference participants in any form. Sexual language and
          imagery is not appropriate for any conference venue, including talks,
          workshops, parties, Twitter and other online media. Conference
          participants violating these rules may be sanctioned or expelled from
          the conference without a refund at the discretion of the conference
          organizers.
        </p>
        <h3 className="text-black">The Less Quick Version</h3>
        <p className="mb-8">
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, religion, sexual images in
          public spaces, deliberate intimidation, stalking, following, harassing
          photography or recording, sustained disruption of talks or other
          events, inappropriate physical contact, and unwelcome sexual
          attention.
        </p>
        <p className="mb-8">
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>
        <p className="mb-8">
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualized images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualized clothing/uniforms/costumes, or otherwise create a
          sexualized environment.
        </p>
        <p className="mb-8">
          If a participant engages in harassing behavior, the conference
          organizers may take any action they deem appropriate, including
          warning the offender or expulsion from the conference with no refund.
        </p>
        <p className="mb-8">
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of conference
          staff immediately. Conference staff can be identified as they'll be
          wearing branded t-shirts.
        </p>
        <p className="mb-8">
          Conference staff will be happy to help participants contact
          hotel/venue security or local law enforcement, provide escorts, or
          otherwise assist those experiencing harassment to feel safe for the
          duration of the conference. We value your attendance.
        </p>
        <p className="mb-8">
          We expect participants to follow these rules at conference and
          workshop venues and conference-related social events.
        </p>
        <p className="mb-8 font-extrabold">
          This Code of Conduct is borrowed from{" "}
          <a href="https://confcodeofconduct.com/">
            Conference Code of Conduct
          </a>
          .
        </p>
      </Container>
      <Footer />
    </Layout>
  );
};

export default CodeOfConductPage;

export const Head: HeadFC = () => <title>Code of Conduct</title>;
