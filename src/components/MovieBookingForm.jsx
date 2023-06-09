import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function MovieBookingForm() {
 
  return (
    <>
    <div id="booking" classname="section">
		<div classname="section-center">
			<div classname="container">
				<div classname="row">
					<div classname="booking-form">
						<div classname="booking-bg"></div>
						<form>
							<div classname="form-header">
								<h2>Book Your Seat</h2>
							</div>
							<div classname="form-group">
								<input classname="form-control" type="text" placeholder="Enter your Name"/>
								<span classname="form-label">Name</span>
							</div>
							<div classname="form-group">
								<input classname="form-control" type="tel" placeholder="Enter your Phone number"/>
								<span classname="form-label">Phone</span>
							</div>
							<div classname="form-group">
								<input classname="form-control" type="tel" placeholder="Enter an origin location"/>
								<span classname="form-label">Pickup Location</span>
							</div>
							<div classname="form-group">
								<input classname="form-control" type="tel" placeholder="Enter a destination location"/>
								<span classname="form-label">Destination Location</span>
							</div>
							<div classname="form-group">
								<select classname="form-control" required>
									<option value="" label="&nbsp;" selected hidden></option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
								<span classname="select-arrow"></span>
								<span classname="form-label">Passenger Numbers</span>
							</div>
							<div classname="row">
								<div classname="col-md-6">
									<div classname="form-group">
										<input classname="form-control" type="date" required/>
										<span classname="form-label">Pickup Date</span>
									</div>
								</div>
								<div classname="col-md-6">
									<div classname="form-group">
										<input classname="form-control" type="time" required/>
										<span classname="form-label">Pickup Time</span>
									</div>
								</div>
							</div>
							<div classname="form-btn">
								<button classname="submit-btn">Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default MovieBookingForm