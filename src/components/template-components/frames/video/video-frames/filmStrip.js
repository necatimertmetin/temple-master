import React from "react";

const FilmStripVideoFrame = ({Parameters}) => {

    return (
        <div className="film-container">
            <div className="film-strip film-strip-outer">
                <div className="film-strip-dash">
                    <div className="film-strip film-strip-inner">
                        <video className="film-rectangle-video" controls>
                            <source src={Parameters?.url} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmStripVideoFrame;