import React from "react";
import "./Style.css";

export default function Project() {
  return (
    <div className="container mt-5 mb-5">
      <h1 id="project">Projects</h1>
    <div className="row ">
      {/* 1st Div */}
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
          <img src="/Media/listing.png" class="card-img-top" alt="listing-image" />
          <div class="card-body">
            <h5 class="card-title">Listing</h5>
            <p class="card-text">
            A web application developed to allow users to list and showcase their favorite places.
            </p>
          </div>
        </div>
      </div>
      {/* 2nd Div */}
      <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
          <img src="/Media/zerodha.png" class="card-img-top" alt="listing-image" />
          <div class="card-body">
            <h5 class="card-title">Zerodha Clone</h5>
            <p class="card-text">
            A web application that enables users to trade stocks, manage portfolios, and mimic the core features of Zerodha.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd Div */}
      <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
          <img src="/Media/videocall.png" class="card-img-top" alt="listing-image" />
          <div class="card-body">
            <h5 class="card-title">MeetEase</h5>
            <p class="card-text">
            Developed a real-time video call application enabling seamless communication between users.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
