import "./Barn.css";

function Barn() {
    return (
        <div className="barn-wrapper">
            <div className="barn-roof"></div>

            <div className="barn-base">
                <div className="door-rail"></div>

                <div className="barn-doors">
                    <div className="barn-door">
                        <div className="barn-door-cross cross1"></div>
                        <div className="barn-door-cross cross2"></div>
                    </div>
                    <div className="barn-door">
                        <div className="barn-door-cross cross1"></div>
                        <div className="barn-door-cross cross2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Barn

