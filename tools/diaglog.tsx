import { Button } from "@/components/ui/button"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function UserRequestForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Talk To Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Connect With Us</DialogTitle>
          <DialogDescription>
            Kindly fill and submit
          </DialogDescription>
        </DialogHeader>
        <div className="gap-y-4">
          <div className="flex flex-col gap-4">
            <TextField
                id="name"
                label="Name"
                placeholder="Enter your name"
                helperText=""
                multiline
                variant="standard"
                required
                InputProps={{
                    style: { color: 'red' }
                  }}
                InputLabelProps={{
                    style: { color: 'green' }
                }}
            />
            <TextField
                id="email"
                label="Email"
                placeholder="Enter your email address"
                helperText=""
                multiline variant="standard"
                required
                InputProps={{
                    style: { color: 'red' }
                  }}
                InputLabelProps={{
                    style: { color: 'green' }
                }}
            />
            <TextField 
                id="contact" 
                label="Contact" 
                type="number"
                variant="standard" 
                placeholder="Enter your phone number"
                helperText=""
                required
                InputProps={{
                    style: { color: 'red' }
                  }}
                InputLabelProps={{
                    style: { color: 'green' }
                }}
            />


          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
