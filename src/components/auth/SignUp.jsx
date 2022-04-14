import React from 'react';

const SignUp = ({ handleSubmit, firstName, setFirstName, lastName, setLastName, email, setEmail, gender, setGender, address, setAddress, bio, setBio }) => {
	return (
		<>
			<form
				onSubmit={handleSubmit}
			>
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="form3Example1">First name</label>
							<input
								type="text"
								id="form3Example1"
								className="form-control"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								placeholder="Your first name ..."
								required
							/>
						</div>
					</div>
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="form3Example1">Last name</label>
							<input
								type="text"
								id="form3Example1"
								className="form-control"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Your last name ..."
								required
							/>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="form-outline mb-4">
						<div className="form-outline">
							<label className="form-label" htmlFor="form3Example2">Email</label>
							<input
								type="email"
								id="form3Example2"
								className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email ..."
								required
							/>
						</div>
					</div>

					<div className="col">
						<label className="form-label" htmlFor="select">Gender </label>

						<select
							className="form-control"
							id="select"
							value={gender}
							onChange={(e) => setGender(e.target.value)}
							required
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="form-outline">
						<div className="col">
							<label className="form-label" htmlFor="bio">Bio</label>
							<input
								type="text"
								id="bio"
								className="form-control"
								value={bio}
								onChange={(e) => setBio(e.target.value)}
								placeholder="Your bio ..."
								required
							/>

						</div>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="address">Address</label>
							<input
								type="text"
								id="address"
								className="form-control"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								placeholder="Your address..."
								required
							/>
						</div>
					</div>
				</div>



				{/* <!-- Submit button --> */}
				<button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

			</form>
		</>
	)
};

export default SignUp;