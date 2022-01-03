import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail(props) {
  const meetupData = props.meetupData;
  return (
    <MeetupDetails
      title={meetupData.title}
      image={meetupData.image}
      address={meetupData.address}
      desc={meetupData.desc}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First Meetup",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firishhistorypodcast.ie%2Fwp-content%2Fuploads%2F2014%2F08%2F2014-07-01-11.13.22-e1406902269265.jpg&f=1&nofb=1",
        address: "Some Street 5, Some City 404040",
        desc: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetail;
