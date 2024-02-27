import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceMeh,
  faFaceSmileWink,
  faFaceFlushed,
  faFaceGrinSquintTears,
  faFaceKiss,
  faFaceGrinWide,
} from "@fortawesome/free-regular-svg-icons";

export default function EndPage({ handlePage, userName, score }) {
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState();

  console.log(message);

  function messageProvider() {
    if (score === 0) {
      setMessage("You had your eyes closed ?");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceMeh}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    } else if (score === 1) {
      setMessage("Tell me you are joking");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceGrinSquintTears}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    } else if (score === 2) {
      setMessage("Mamma mia");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceFlushed}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    } else if (score === 3) {
      setMessage("Almost there");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceSmileWink}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    } else if (score === 4) {
      setMessage("I know you can do it");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceKiss}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    } else if (score === 5) {
      setMessage("Wow !");
      setIcon(
        <FontAwesomeIcon
          icon={faFaceGrinWide}
          size="2xl"
          style={{ color: "orange" }}
        />
      );
    }
  }

  useEffect(() => {
    messageProvider();
  }, []);

  return (
    <div
      className="modal show "
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header
          className="endpage-header"
          closeButton
          style={{
            backgroundColor: "#3b5d63",
            color: "#e2dfb1",
            border: "none",
          }}
        >
          <Modal.Title>
            {userName}, your score is {score}/5{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="endpage-body"
          style={{ backgroundColor: "#3b5d63", color: "#e2dfb1" }}
        >
          <p>{message}</p>
          <p>{icon}</p>
        </Modal.Body>

        <Modal.Footer
          style={{
            backgroundColor: "#3b5d63",
            color: "#e2dfb1",
            border: "none",
          }}
        >
          <Button
            className="endpage-button"
            style={{
              backgroundColor: "#7fa580",
              color: "#102136",
              boxShadow: "3px 3px #102136",
              border: "none",
            }}
            variant="primary"
            onClick={() => handlePage("startPage")}
          >
            Restart the quiz
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
