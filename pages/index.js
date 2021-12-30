import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firishhistorypodcast.ie%2Fwp-content%2Fuploads%2F2014%2F08%2F2014-07-01-11.13.22-e1406902269265.jpg&f=1&nofb=1",
    address: "some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-1mP18N3S1sb38uK0bumCwHaFC%26pid%3DApi&f=1",
    address: "some address 6 , 12345 Some City",
    description: "This is second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
