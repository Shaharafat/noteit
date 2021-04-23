/*
 *
 * Title: Reset Password
 * Description: Reset Password
 * Author: Shah Arafat
 * Date: 23-04-2021
 *
 */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, useResponseBox } from '..';
import { resetPasswordSchema, validateSchema } from '../../helpers/schemas';
import { setPassword } from '../../store/actions/users';
import { useStore } from '../../store/Store';

const ResetPassword = () => {
  const { MessageBox, configureMessageBox } = useResponseBox();
  const { resetToken } = useParams();
  const [disabled, setDisabled] = useState(false);
  const { dispatch } = useStore();
  const history = useHistory();

  // validate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(resetPasswordSchema);

  // execute when form submitted.
  const reset = async (data) => {
    setDisabled(true);
    const response = await setPassword(resetToken, data.password, dispatch);
    const { success, message } = response;
    setDisabled(false);

    if (success) {
      history.push('/dashboard');
    } else {
      configureMessageBox(false, message);
    }
  };

  return (
    <div className="w-full text-electromagnatic bg-white shadow-lg rounded-md p-3">
      <h1 className="text-2xl font-bold font-railway">Reset Password</h1>

      <MessageBox />
      {/* form */}
      <form onSubmit={handleSubmit(reset)} className="mt-3">
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 px-2 py-1 border border-gray-300 w-full"
            placeholder="Type password"
            {...register('password')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            className="mt-1 px-2 py-1 border border-gray-300 w-full"
            placeholder="Type password again"
            {...register('confirmPassword')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
        </div>
        <Button type={'submit'} disabled={disabled} medium={true}>
          Reset
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
