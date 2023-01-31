import {
  Card,
  Button,
  Grid,
  Container,
  Message,
  Header,
} from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Container fluid style={{ paddingTop: "25%" }}>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Card centered>
              <Card.Content>
                <Card.Header centered textAlign="center">
                  <Header>Count</Header>
                </Card.Header>
                <Card.Description textAlign="center">
                  <Header>{count}</Header>
                </Card.Description>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Button color="green" onClick={() => increment()}>
                        Increment
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Button
                        color="red"
                        disabled={count === 0}
                        onClick={() => decrement()}
                      >
                        Decrement
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Header
            content="Done by : Balisetty Pavan Kalyan - 12013966"
            textAlign="center"
          ></Header>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
