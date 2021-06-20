import TextField from '@material-ui/core/TextField';

export default function EmailSignIn() {
  return (
    <form>
      <TextField
        id="standard-basic"
        label="Email"
        fullWidth
        variant="outlined"
      />
    </form>
  );
}
