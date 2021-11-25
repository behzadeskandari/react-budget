import React from 'react'
import { Grid, GridRow, Icon, Segment } from 'semantic-ui-react'

export default function EntryLine({ description ,value, isExpense = false, color}) {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column with={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column  with={3} textAlign="right">{value}</Grid.Column>
            <Grid.Column  with={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash"/>
            </Grid.Column>
          </GridRow>
        </Grid>
  </Segment>
    )
}
