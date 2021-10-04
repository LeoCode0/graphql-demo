import React from "react";
import { LaunchCard } from "./LaunchCard";
import "../css/carousel.css";

import { useQuery, gql } from "@apollo/client";

const LAUNCHES_INFO = gql`
  query getLaunches {
    launches(limit: 7) {
      mission_name
      launch_success
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

export const Carousel = () => {
  const { data, loading, error } = useQuery(LAUNCHES_INFO);

  if (loading) return <p> Loading ...</p>;
  if (error) return <h2>Error</h2>;

  return (
    <div className="carousel">
      {data.launches.map((item) => (
        <LaunchCard key={item.mission_name} {...item} />
      ))}
    </div>
  );
};
