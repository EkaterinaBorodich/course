import React from 'react'
import food from "../assets/restauranfood.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
          <button className="reserve-btn" >
            Reserve a Table
            </button>
            </Link>
        </div>
        <div className="hero-image">
          <img src={food} alt="Food" />
        </div>
      </section>
    </header>
  )
}

export default Header
