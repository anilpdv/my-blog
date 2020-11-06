import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

export default class ToggleTheme extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <>
            <label>
              <Toggle
                defaultChecked={theme !== "dark"}
                name="toastIsReady"
                value="yes"
                icons={{
                  checked: (
                    <img
                      src={sun}
                      role="presentation"
                      style={{ width: 18, height: 18, pointerevents: "none" }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={moon}
                      role="presentation"
                      style={{
                        pointerevents: "none",
                        width: 18,
                        height: 18,
                        color: "red",
                      }}
                    />
                  ),
                }}
                onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
              />
            </label>
          </>
        )}
      </ThemeToggler>
    )
  }
}
