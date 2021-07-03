
import './Features.css';


function Features() {
  return (
    <>
        <div className="features-block1">
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h1>Well-Stocked Kitchen Facility</h1>
                <h1>Laundry facilities and service</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h1>A variety of Room Bed Choices</h1>
                <h1>Confertable and Inviting common areas</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h1>Plenty Of Clean, function bathrooms</h1>
                <h1>Security</h1>
            </div>
        </div>
    </>
  );
}

export default Features;