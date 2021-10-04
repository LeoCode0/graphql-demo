import { gql, useQuery } from "@apollo/client";
import { LaunchCard } from "./LaunchCard";

import "../css/launches.css";

const LAUNCHES_INFO = gql`
  query getLaunches {
    launches(limit: 20) {
      id
      mission_name
      launch_success
      details
      launch_year
      launch_site {
        site_name_long
      }
      links {
        flickr_images
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export const LaunchesDetailed = () => {
  const { data, loading, error } = useQuery(LAUNCHES_INFO);

  if (loading) return <p> Loading ...</p>;
  if (error) return <h2>Error</h2>;

  return (
    <div className="launches">
      {data.launches.map((item) => (
        <LaunchCard key={item.mission_name} {...item} />
      ))}
    </div>
  );
};
