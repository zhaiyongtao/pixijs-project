/**
 * index - 使用
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 7:51 下午
 * @LastEditTime: 2021/10/19 7:51 下午
 */

import * as React from 'react';
import { createTheme, styled, ThemeProvider, darken } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#20b2aa',
        },
    },
});

const CustomizedSlider = styled(Slider)(
    ({ theme }) => `
  color: ${theme.palette.primary.main};

  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`,
);

export default function StyledComponentsTheme() {
    return (
        <Box sx={{ width: 300 }}>
            <ThemeProvider theme={customTheme}>
                <CustomizedSlider defaultValue={30} />
            </ThemeProvider>
        </Box>
    );
}