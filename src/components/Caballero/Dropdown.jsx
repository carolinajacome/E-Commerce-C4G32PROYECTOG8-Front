import { HStack } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"

export const Dropdown = () => {
    return (
        <>
            <HStack mt="5" mx="3">
                <Select placeholder="Selecciona una opción...">
                    <option value="option1">Populares</option>
                    <option value="option2">Más vendidos</option>
                    <option value="option3">Nuevos</option>
                </Select>
            </HStack>
        </>
    )
}
