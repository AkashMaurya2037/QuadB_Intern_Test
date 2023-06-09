import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function MovieBookingForm() {
 
  return (
    <>
    <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="booking-bg"></div>
						<form>
							<div class="form-header">
								<h2>Book Your Seat</h2>
							</div>
							<div class="form-group">
								<input class="form-control" type="text" placeholder="Enter your Name"/>
								<span class="form-label">Name</span>
							</div>
							<div class="form-group">
								<input class="form-control" type="tel" placeholder="Enter your Phone number"/>
								<span class="form-label">Phone</span>
							</div>
							<div class="form-group">
								<input class="form-control" type="tel" placeholder="Enter an origin location"/>
								<span class="form-label">Pickup Location</span>
							</div>
							<div class="form-group">
								<input class="form-control" type="tel" placeholder="Enter a destination location"/>
								<span class="form-label">Destination Location</span>
							</div>
							<div class="form-group">
								<select class="form-control" required>
									<option value="" label="&nbsp;" selected hidden></option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
								<span class="select-arrow"></span>
								<span class="form-label">Passenger Numbers</span>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date" required/>
										<span class="form-label">Pickup Date</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="time" required/>
										<span class="form-label">Pickup Time</span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn">Book Now</button>
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