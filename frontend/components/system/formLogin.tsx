import React from 'react'
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

function FormLogin() {
  return (
    <form className="flex flex-col px-5 w-full md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="password" label="password" />
      <Button>
        Login
      </Button>
    </form>
  )
}

export default FormLogin