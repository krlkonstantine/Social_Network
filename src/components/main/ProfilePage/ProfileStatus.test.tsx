import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {store} from "../../../redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {updateStatus} from "../../../redux/reducers/profile-reducer";

describe('Profile Status Component', () => {

    test('status from props should render', () => {
        //data
        render(<HashRouter>
            <Provider store={store}>
                <EditableSpan value={'blabhblhblah'} updateValue={updateStatus}/>
            </Provider>
        </HashRouter>)

        const profileStatus = screen.getByTestId("profile-status")

        expect(profileStatus).toBeInTheDocument()

    })

    test('status should be a text', () => {
        //data
        render(<HashRouter>
            <Provider store={store}>
                <EditableSpan value={'blabhblhblah'} updateValue={updateStatus}/>
            </Provider>
        </HashRouter>)

        const profileStatus = screen.getByTestId("profile-status")
        expect(profileStatus).toHaveTextContent('blabhblhblah')


    })

})
