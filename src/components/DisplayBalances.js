import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

export default function DisplayBalances() {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <DisplayBalance title="Income" value="1253.54" color="green"/>
              </Grid.Column>
              <Grid.Column>
                <DisplayBalance title="Expense" value="3253.54" color="red"/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </Segment>
    )
}
