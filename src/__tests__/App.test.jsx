import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom";
import App from "../App"

// Test 1: Check heading
test("renders Hello React heading", () => {
    render(<App />)
    expect(screen.getByText(/Hello React/i)).toBeInTheDocument()
})

// Test 2: Check initial count
test("shows initial count as 0", () => {
    render(<App />)
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
})

// Test 3: Button increments count
test("increments count when button is clicked", () => {
    render(<App />)
    const button = screen.getByText(/Increment/i)
    fireEvent.click(button)
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()
})
