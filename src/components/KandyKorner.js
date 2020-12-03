import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./nav/ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = () => (
<>
<>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>


 </>
)