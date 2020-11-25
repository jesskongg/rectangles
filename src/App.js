// /** @jsxRuntime classic */
/** @jsx jsx */
import './App.css';
import { css, jsx } from '@emotion/react';
import Rectangle from './components/Rectangle';
import { InputLabel, Input, Button } from '@material-ui/core';
import RectanglesContainer from './components/RectanglesContainer';
import { getRectangles } from './controller/clientAPIs';

const useStyles = () => ({
  wrapper: css({
    padding: "20px"
  })
})

function App() {

  const styles = useStyles();


  return (
    <div css={styles.wrapper}>
      <h1>CRUD Rectangles</h1>
      <h2>Add, delete, and edit rectangles as you please and they will appear below</h2>
      {/* <Rectangle width={20} height={10} color={"red"} radius={0.5} opacity={0.5} cursorType={"pointer"} /> */}
      <RectanglesContainer rectangleData={getRectangles()}/>
      <br/>
      <InputLabel>
        Width:
        <Input type="number" />
      </InputLabel>
      <InputLabel>
        Height:
        <Input type="number" />
      </InputLabel>
      <InputLabel>
        Color:
        <Input type="text" />
      </InputLabel>
      <InputLabel>
        Radius:
        <Input type="number" />
      </InputLabel>
      <InputLabel>
        Opacity:
        <Input type="number" />
      </InputLabel>
      <InputLabel>
        Cursor Type:
        <Input type="text" />
      </InputLabel>
      <br/>
      <Button variant="contained">
        Submit
      </Button>
    </div>
  );
}

export default App;
