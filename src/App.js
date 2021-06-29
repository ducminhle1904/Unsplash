import React from "react";
import Home from "./Pages/Home";
import SingleImage from "./Pages/SingleImage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";
import Modal from "@material-ui/core/Modal";

function App() {
  return (
    <Router>
      <ModalSwitch
        renderModal={({ open }) => (
          <Modal open={open} scroll="body">
            <ModalRoute
              defaultParentPath="/"
              path="/photos/:id"
              component={SingleImage}
            />
          </Modal>
        )}
      >
        {/* <Route exact path={["/", "/photos/:id"]}>
          <Home />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/photos/:id">
          <SingleImage />
        </Route>
        {/* <Route exact path="*">
          <Error />
        </Route> */}
      </ModalSwitch>
    </Router>
  );
}

export default App;
