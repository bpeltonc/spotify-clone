import NextLink from 'next/link';
import { 
    List,
    ListItem,
    LinkOverlay,
    ListIcon,
    LinkBox
} from '@chakra-ui/layout'

type Props = {
    data: any[];
}

const MenuGroup = ({data}: Props) => {
    return (
        <List spacing={2} >
            {data.map(menu => (
                <ListItem paddingX='20px' fontSize='16px' key={menu.name}>
                    <LinkBox>
                        <NextLink href={menu.route} passHref>
                            <LinkOverlay>
                                <ListIcon as={menu.icon} color='white' marginRight='20px' />
                                {menu.name}
                            </LinkOverlay>
                        </NextLink>
                    </LinkBox>
                </ListItem>
                ))}
        </List>
    )
};

export default MenuGroup;