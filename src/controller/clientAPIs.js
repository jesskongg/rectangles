import axios from "axios";

export const getRectangles = () => {

  let p = axios.get("/", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  return p
    .then(res => {
      console.log("Rectangles", res);
      return res;
    })
    .catch(err => {
      console.log("Error", err);
    });
};

export const putRectangles = (columnName, value, id) => {
  let body = {
    columName: columnName,
    value: value,
    id: id
  };

  let p = axios.put("/update", body, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  return p
    .then(res => {
      console.log("Update rectangles", res);
      return res;
    })
    .catch(err => {
      console.log("Error", err);
    });
};

export const deleteRectangles = (id) => {
  let body = {
    id: id
  };

  let p = axios.put("/delete", body, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  return p
    .then(res => {
      console.log("Delete rectangles", res);
      return res;
    })
    .catch(err => {
      console.log("Error", err);
    });
};

export const postRectangles = (id, width, height, color, radius, opacity, cursorType) => {
  let body = {
    id: id,
    width: width,
    height: height,
    color: color,
    radius: radius,
    opacity: opacity,
    cursorType: cursorType
  };

  let p = axios.post("/add", body, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  return p
    .then(res => {
      console.log("Added rectangle", res);
      return res;
    })
    .catch(err => {
      console.log("Error", err);
    });
};