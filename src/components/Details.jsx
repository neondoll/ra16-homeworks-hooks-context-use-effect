import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Details(props) {
  const [info, setInfo] = useState();

  useEffect(() => {
    if (props.info) {
      fetch(import.meta.env.VITE_BACKEND_URL + `/${props.info.id}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response.json();
        })
        .then((data) => {
          setInfo(data);
        })
        .catch((error) => {
          setInfo(undefined);
          console.error(error);
        });
    }
  }, [props.info]);

  return info
    ? (
        <div className="details">
          <img alt={`Avatar ${info.name}`} className="details__img" src={info.avatar} />
          <div className="details__body">
            <h5 className="details__title">{info.name}</h5>
          </div>
          <div className="details__list list">
            <div className="list__item">{`City: ${info.details.city}`}</div>
            <div className="list__item">{`Company: ${info.details.company}`}</div>
            <div className="list__item">{`Position: ${info.details.position}`}</div>
          </div>
          <div className="details__body" />
        </div>
      )
    : <></>;
}

Details.propTypes = { info: PropTypes.object };

export default Details;
