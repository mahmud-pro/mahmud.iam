import React from "react";
import Card from "./Card";
import web from "./img/img1.jpg";
import Sdata from "./Sdata";

export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

            <>
              {/* <div className="col-md-4 col-10 mx-auto d-flex">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={web}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
            </>

              {
                Sdata.map((val, ind)=>{
                  return <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    CardTitle={val.card_title}
                    cardText={val.cardText}
                    btnText={val.btnText}
                  />
                })
              }

              {/* <Card imgsrc={web} CardTitle='This is Card Title' cardText="Some quick example text to build on the card title and make up the
              bulk of the card's content." btnText='Go Somewhere' /> */}

              



            </div>
          </div>
        </div>
      </div>
    </>
  );
}
