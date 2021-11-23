import { Filters } from "../components/Caballero/Filters"
import { Dropdown } from "../components/Caballero/Dropdown"
import { Grid, GridItem } from "@chakra-ui/react"
import { GridCards } from "../components/Caballero/GridCards"

const Caballero = () => {
    return (
        <>
            <Grid
                h="auto"
                templateRows="repeat(auto-fit, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={3}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Filters />
                </GridItem>

                <GridItem colSpan={4}>
                    <Dropdown />
                    <GridCards />
                </GridItem>
            </Grid>
        </>
    )
}

export default Caballero
