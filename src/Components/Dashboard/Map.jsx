import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return <>
        <div className="blue-border rounded-4 bg-white overflow-hidden">
            <div className="row">
                <div className="col-md-7">
                    <div style={{ height: '60vh', width: '100%' }} className="position-relative">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                        <div className="position-absolute top-0 text-white m-2">
                            <h4>Map</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex flex-column py-3">
                    <div className="row align-items-center">
                        <div className="col-md-5 p-0">
                            <h4 className="text-color">Egypt</h4>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between fs-5">
                                <p className="borderBottomGreen px-2">local</p>
                                <p className="gray-text">Abroad</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 w-100 h-75 mx-auto d-flex flex-column justify-content-between mt-4">
                        <div>
                            <div className="d-flex justify-content-between textLightGreen">
                                <p>Programming Courses</p>
                                <p>62%</p>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: "62%", backgroundColor: "#09BC71" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between textLightGreen">
                                <p>Programming Courses</p>
                                <p>62%</p>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: "62%", backgroundColor: "#09BC71" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between textLightGreen">
                                <p>Programming Courses</p>
                                <p>62%</p>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: "62%", backgroundColor: "#09BC71" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between textLightGreen">
                                <p>Programming Courses</p>
                                <p>62%</p>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: "62%", backgroundColor: "#09BC71" }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}


