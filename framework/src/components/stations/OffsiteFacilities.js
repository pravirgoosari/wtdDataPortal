import React from 'react';
import { Link } from 'react-router-dom';

function OffsiteFacilities() {
  return (
    <div className="container text-center">
      {/* Home Button */}
      <div className="text-start mb-3">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>

      <h1>Offsite Facilities</h1>
      <h2>Select a facility</h2>

      <div className="main-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Facility</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><Link to="/11th-ave-nw-of">11th Ave.NW OF Weir</Link></td></tr>
            <tr><td><Link to="/30th-ave">30TH AVE</Link></td></tr>
            <tr><td><Link to="/3rd-ave-ewing-st">3rd Ave.</Link></td></tr>
            <tr><td><Link to="/53rd-ave">53RD AVE PS</Link></td></tr>
            <tr><td><Link to="/63rd-ave">63RD AVE PS</Link></td></tr>
            <tr><td><Link to="/8th-ave">8th Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/allen-town">Allen Town</Link></td></tr>
            <tr><td><Link to="/ballard">Ballard R.S.</Link></td></tr>
            <tr><td><Link to="/barton">BARTON</Link></td></tr>
            <tr><td><Link to="/bellevue">Bellevue PS</Link></td></tr>
            <tr><td><Link to="/belvoir">BELVOIR</Link></td></tr>
            <tr><td><Link to="/black-diamond">BLACK DIAMOND</Link></td></tr>
            <tr><td><Link to="/black-river-pump-station">Black River Pump Station</Link></td></tr>
            <tr><td><Link to="/brandon">Brandon R.S.</Link></td></tr>
            <tr><td><Link to="/canal-st-of-weir">Canal St. OF Weir</Link></td></tr>
            <tr><td><Link to="/carkeek">CARKEEK</Link></td></tr>
            <tr><td><Link to="/chelan">Chelan Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/connecticut">Conn. St. R.S.</Link></td></tr>
            <tr><td><Link to="/denny-lu">Denny Way - LU R.S.</Link></td></tr>
            <tr><td><Link to="/denny-local">Denny Way Local R.S.</Link></td></tr>
            <tr><td><Link to="/densmore">DENSMORE</Link></td></tr>
            <tr><td><Link to="/dexter">Dexter Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/duwamish">DUWAMISH</Link></td></tr>
            <tr><td><Link to="/emarginal-wy-s">E MARGINAL WY S</Link></td></tr>
            <tr><td><Link to="/east-pine">EAST PINE</Link></td></tr>
            <tr><td><Link to="/green-lake-trunk">Green Lake Trunk</Link></td></tr>
            <tr><td><Link to="/hanford">Hanford #2 R.S.</Link></td></tr>
            <tr><td><Link to="/harbor">Harbor Ave. R.S.</Link></td></tr>
            <tr><td><Link to="/heathfield">HEATHFIELD</Link></td></tr>
            <tr><td><Link to="/hidden-lake">HIDDEN LAKE</Link></td></tr>
            <tr><td><Link to="/hollywood">HOLLYWOOD</Link></td></tr>
            <tr><td><Link to="/interbay">INTERBAY</Link></td></tr>
            <tr><td><Link to="/juanita-bay">JUANITA BAY</Link></td></tr>
            <tr><td><Link to="/kenmore">KENMORE</Link></td></tr>
            <tr><td><Link to="/king">King St. R.S.</Link></td></tr>
            <tr><td><Link to="/kirkland">KIRKLAND</Link></td></tr>
            <tr><td><Link to="/lake-ballinger">LAKE BALLINGER</Link></td></tr>
            <tr><td><Link to="/lake-city">Lake City Tunnel R.S.</Link></td></tr>
            <tr><td><Link to="/lake-hills-interceptor">Lake Hills Interceptor</Link></td></tr>
            <tr><td><Link to="/lakeland-hills">LAKELAND HILLS</Link></td></tr>
            <tr><td><Link to="/lander">Lander R.S.</Link></td></tr>
            <tr><td><Link to="/m-street-trunk">M Street Trunk</Link></td></tr>
            <tr><td><Link to="/matthewslakeline">Matthews Lakeline</Link></td></tr>
            <tr><td><Link to="/matthews-park">MATTHEWS PARK</Link></td></tr>
            <tr><td><Link to="/medina">MEDINA</Link></td></tr>
            <tr><td><Link to="/southmichigan">Michigan St. R.S.</Link></td></tr>
            <tr><td><Link to="/montlake">Montlake R.S.</Link></td></tr>
            <tr><td><Link to="/murray">MURRAY</Link></td></tr>
            <tr><td><Link to="/north-mercer">N. MERCER</Link></td></tr>
            <tr><td><Link to="/new-interurban">NEW INTERURBAN</Link></td></tr>
            <tr><td><Link to="/norfolk">Norfolk St. R.S.</Link></td></tr>
            <tr><td><Link to="/north-beach">NORTH BEACH</Link></td></tr>
            <tr><td><Link to="/north-creek">NORTH CREEK</Link></td></tr>
            <tr><td><Link to="/pacific">PACIFIC</Link></td></tr>
            <tr><td><Link to="/rainier">RAINIER</Link></td></tr>
            <tr><td><Link to="/richmond-beach">RICHMOND BEACH</Link></td></tr>
            <tr><td><Link to="/south-mercer">S. MERCER</Link></td></tr>
            <tr><td><Link to="/henderson">SOUTH HENDERSON</Link></td></tr>
            <tr><td><Link to="/sunset">SUNSET</Link></td></tr>
            <tr><td><Link to="/sweyolocken">SWEYOLOCKEN</Link></td></tr>
            <tr><td><Link to="/university">University R.S.</Link></td></tr>
            <tr><td><Link to="/wmarginal-wy-s">W MARGINAL WY S</Link></td></tr>
            <tr><td><Link to="/westmichigan">West Michigan St. R.S.</Link></td></tr>
            <tr><td><Link to="/west-seattle">WEST SEATTLE</Link></td></tr>
            <tr><td><Link to="/wilburton">WILBURTON</Link></td></tr>
            <tr><td><Link to="/woodinville">WOODINVILLE</Link></td></tr>
            <tr><td><Link to="/yarrow-bay">YARROW BAY</Link></td></tr>
            <tr><td><Link to="/york">YORK</Link></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OffsiteFacilities;