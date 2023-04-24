import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function LoginFromComponent() {
    const [email, setEmail] = useState('');

    const [maskPassword, setMaskPassword] = useState(false);

    const [password, setPassword] = useState('');

    return (
        <div className="p-2 bg-white shadow-md rounded-xl">
            <h1 className="flex justify-center text-lg font-bold text-bvAzul">
                Login
            </h1>
            <FormControl>
                <FormLabel className="text-bv-Escuro">Email</FormLabel>
                <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="mb-2"
                    placeholder="Digite seu email"
                />
                <FormLabel className="text-bv-Escuro">Senha</FormLabel>
                <InputGroup size="lg">
                    <Input
                        pr="4.5rem"
                        type={maskPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="mb-2"
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setMaskPassword(!maskPassword)}
                            className="mr-2 p-1"
                        >
                            {maskPassword ? 'Ocultar' : 'Visualizar'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button
                    isLoading //depois fazer condicional para só rodar depois do submit
                    loadingText="Loading"
                    colorScheme="whatsapp"
                    variant="outline"
                    spinnerPlacement="start"
                >
                    Submit
                </Button>
            </FormControl>
        </div>
    );
}
