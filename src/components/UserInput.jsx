import React, { useState } from 'react'

export default function UserInput({ handleInputChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" name="initialInvestment"
                        required onChange={handleInputChange}
                        value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" name="annualInvestment"
                        required onChange={handleInputChange}
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" name="expectedReturn"
                        required onChange={handleInputChange}
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" name="duration"
                        required onChange={handleInputChange}
                        value={userInput.duration}
                    />
                </p>
            </div>
        </section>

    )
}
