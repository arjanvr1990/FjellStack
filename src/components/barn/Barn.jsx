import "./Barn.css";

function Barn() {
    return (
        <div className="barn-wrapper">

            <div className="barn-roof-outer">
                <div className="barn-roof-inner">

                    <div className="barn-windows">
                        <div className="barn-window">
                            <div className="window-frame-1"></div>
                        </div>
                        <div className="barn-window">
                            <div className="window-frame-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="barn-base">


                <div className="door-rail"></div>

                <div className="barn-door-frame">
                    <div className="barn-doors">
                        <div className="door-container left">
                            <div className="barn-door left-door">
                                <div className="barn-door-cross cross1"></div>
                                <div className="barn-door-cross cross2"></div>
                            </div>
                        </div>

                        <div className="door-container right">
                            <div className="barn-door right-door">
                                <div className="barn-door-cross cross1"></div>
                                <div className="barn-door-cross cross2"></div>
                            </div>
                        </div>

                        <a href="/workshop" className="door-button"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Barn

