import { Grid, GridItem } from '@chakra-ui/react'

import ItemsCard from "../components/ShoppingCart/ItemsCard"
import Summary from "../components/ShoppingCart/Summary"

const ShoppingCart = () => {
    return (
        <>
            <Grid
                h="auto"
                templateRows="repeat(auto-fit, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={3}
            >
                <GridItem rowSpan={2} colSpan={2}>
                    <ItemsCard />
                </GridItem>

                <GridItem colSpan={1}>
                    <Summary />
                </GridItem>
            </Grid>
        </>
    )
}

export default ShoppingCart
