import { Stack, Checkbox } from "@chakra-ui/react"


export default function Checkboxes({handleCheckBox}) {


    return (
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox size='md' colorScheme='purple' name="open" onChange={handleCheckBox} defaultChecked>
                Open
            </Checkbox>
            <Checkbox size='md' colorScheme='green' name="paid" onChange={handleCheckBox} defaultChecked>
                Paid
            </Checkbox>
            <Checkbox size='md' colorScheme='gray' name="complete" onChange={handleCheckBox} >
                Complete
            </Checkbox>
            <Checkbox size='md' colorScheme='red' name="cancelled" onChange={handleCheckBox} >
                Cancelled
            </Checkbox>
        </Stack>
    )
}

