import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
const ImageBox = () => {
  const [data, setData] = useState(null);
  const [modalToggle, setModalToggle] = useState(false);

  const handleImageClicked = () => {
    setModalToggle(!modalToggle);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        const jsonData = await response.json();
        setData(jsonData); // Set state with fetched data
        console.log("json data", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);
  return (
    <div>
      <div className="container">
        <div className="inner-continer">
          {data &&
            data.map((item, i) => (
              <div className="box" key={i}>
                <div
                  className="image-box"
                  onClick={i === 3 ? () => handleImageClicked() : null}
                >
                  <img src={item.thumbnail.small} />
                </div>
                <div className="color-box">
                  <div className="color-box-1">
                    <div></div>
                  </div>
                  <div className="color-box-2">
                    <div></div>
                  </div>
                </div>
                <div className="bellow-text">
                  {/* color */}

                  {/* color */}
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                  <div>
                    <p>{item.content}</p>
                  </div>
                  {/* footer */}
                  <div className="footer-text">
                    <div>
                      <span>{item.author.name} </span>
                      <span>{"- " + item.author.role} </span>
                    </div>
                    <span>Nov 25,2020</span>
                  </div>
                  {/* footer */}
                </div>
              </div>
            ))}
        </div>
      </div>
      {modalToggle && (
        <Modal handleImageClicked={handleImageClicked} singleData={data[1]} />
      )}
    </div>
  );
};

export default ImageBox;
