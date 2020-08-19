import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./mail.css"

const Mail = () => {
  const [email, setEmail] = React.useState(null)

  const handleChange = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if (email !== null) {
      const result = await addToMailchimp(
        email,
        "",
        "https://samuelgomez.us17.list-manage.com/subscribe/post?u=656521d2f1d081db649218d01&amp;id=2516fdb8e9"
      )
      alert(result.msg)
    } else {
      alert("Please enter a valid em")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="parent-wrapper">
        <span className="close-btn glyphicon glyphicon-remove"></span>
        <div className="subscribe-wrapper">
          <h4>SUBSCRIBE TO KEEP IN TOUCH</h4>
          <input
            className="subscribe-input"
            placeholder="Your e-mail"
            type="email"
            name="email"
            onChange={e => {
              handleChange(e)
            }}
          />
          <input type="submit" className="submit-btn" />
        </div>
      </div>
    </form>
  )
}
export default Mail
