import React, { useState } from 'react';
import './App.css';
import SignUp from './components/auth/SignUp';
import UserData from './components/UserData';

function App(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");
	const [bio, setBio] = useState("");
	const [shouldDisplayInfo, setShouldDisplayInfo] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setShouldDisplayInfo(true);
		console.log(`${firstName}, ${email}, ${gender}, ${address}, ${bio}, `);
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-8" style={{ margin: "auto" }}>
					<h1
						className="my-3 mx-3 ml-0"
					>
						{
							shouldDisplayInfo ?
								"Submitted details"
								:
								"Register"
						}</h1>

					{!shouldDisplayInfo ?
						<SignUp
							handleSubmit={handleSubmit}
							firstName={firstName}
							lastName={lastName}
							email={email}
							gender={gender}
							address={address}
							bio={bio}

							setFirstName={setFirstName}
							setLastName={setLastName}
							setEmail={setEmail}
							setGender={setGender}
							setAddress={setAddress}
							setBio={setBio}
						/>
						:
						<UserData
							firstName={firstName}
							email={email}
							gender={gender}
							address={address}
							bio={bio}
						/>
					}

				</div>
			</div>
		</div>
	)
}

export default App;