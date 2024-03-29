import React, { FC, useRef, useState } from 'react';
import { Container, Dropdown, DropdownItem, DropdownToggler, DropdownWrapper, Error } from './styles';
import useClickOutside from '../../utils/hooks/useClickOutside';

interface Props {
    options: Array<string>
    onChange: (option: string) => void
    placeholder?: string
    value?: string
    error?: string
}

export const Select: FC<Props> = ({ options, onChange, placeholder, value, error }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const ref = useRef(null);
    const handleClickOutside = () => {
        setDropdownOpen(false);
    };

    useClickOutside(ref, handleClickOutside);

    const onChangeOption = (option: string) => {
        onChange(option);
        setDropdownOpen(false);
    };

    return (
        <Container>
            <DropdownWrapper ref={ref}>
                <DropdownToggler
                    $placeholder={value ? undefined : placeholder}
                    $isActive={dropdownOpen}
                    onClick={() => setDropdownOpen((prevState) => !prevState)}
                    $error={!!error}
                    type={'button'}
                >{value}</DropdownToggler>
                {dropdownOpen && <Dropdown>
                    {options.map((item) => <DropdownItem
                        key={item}
                        $isActive={item === value}
                        onClick={() => onChangeOption(item)}
                        type={'button'}
                    >
                        {item}
                    </DropdownItem>)}
                </Dropdown>}
            </DropdownWrapper>
            {error && <Error>{error}</Error>}
        </Container>
    );
};
