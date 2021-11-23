import { Filters } from "../components/Dama/Filters"
import { ProductCard } from "../components/Dama/ProductCard"

const Dama = () => {
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
                    <ProductCard />
                </GridItem>
            </Grid>
        </>
    )
}

export default Dama
