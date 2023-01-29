import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Event } from "@mui/icons-material";
import Image from "next/image";
import User1 from "../assets/img/user1.svg";
import User2 from "../assets/img/user2.svg";
import User3 from "../assets/img/user3.svg";
import Messages from "../assets/img/messages.svg";
import Files from "../assets/img/files.svg";

export const ProjectCard = ({ project, users }) => {
  const [showing, setShowing] = useState('unfinished');

  return (
    <Card sx={{ padding: '10px', marginTop: '18px' }}>
      <Box sx={{ display: 'block', marginTop: '12px', marginBottom: '30px' }}>
        <label
          style={{
            background: 'rgba(223, 168, 116, 0.2)',
            color: '#D58D49',
            padding: '6px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '500',
          }}
        >
          ₦{project?.budget}
        </label>
        <Box sx={{ display: 'flex', float: 'right' }}>
          <label
            style={{ fontSize: '16px', fontWeight: 800, color: '#0D062D' }}
          >
            ...
          </label>
        </Box>
      </Box>
      <Box>
        {' '}
        <p style={{ color: '#1D2939', fontSize: '16px', fontWeight: '500' }}>
          {project?.name}
        </p>
      </Box>
      <Box>
        <p
          style={{
            fontWeight: '400',
            fontSize: '12px',
            color: '#787486',
            marginTop: '5px',
          }}
        >
          {project?.description}
        </p>
      </Box>
      <Box sx={{ display: 'block', marginTop: '24px', marginBottom: '24px' }}>
        <Box
          sx={{
            border: 1,
            borderRadius: '20px',
            borderColor: '#D0D5DD',
            display: 'inline-flex',
            padding: '10px',
            marginRight: '24px',
          }}
        >
          <Event sx={{ width: 12, height: 12, marginRight: '10px' }} />
          <lable style={{ fontSize: '10px', fontWeight: 500 }}>Feb 20</lable>
        </Box>
        <Box
          sx={{
            border: 1,
            borderRadius: '20px',
            borderColor: '#D0D5DD',
            display: 'inline-flex',
            padding: '10px',
          }}
        >
          <label
            style={{
              borderRadius: '50%',
              background: '#6941C6',
              width: '12px',
              height: '12px',
              display: 'inline',
              marginRight: '8px',
            }}
          />
          <lable style={{ fontSize: '10px', fontWeight: 500 }}>
            {project?.team || 'Engineering'}
          </lable>
        </Box>
      </Box>

      <Box
        flexGrow={1}
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Box flexGrow={3} style={{ marginRight: '50px', display: 'inline' }}>
          <Box
            flexGrow={1}
            sx={{
              display: 'relative',
              alignItems: 'center',
            }}
          >
            <Image
              src={User3}
              style={{
                position: 'absolute',
                marginTop: '-14px',
                marginLeft: '40px',
              }}
              alt='icon'
            />
            <Image
              style={{
                position: 'absolute',
                marginLeft: '20px',
                marginTop: '-14px',
              }}
              src={User2}
              alt='icon'
            />
            <Image
              src={User1}
              style={{ position: 'absolute', marginTop: '-14px' }}
              alt='icon'
            />
          </Box>
        </Box>
        <Box
          flexGrow={4}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '10px',
          }}
        >
          <Image src={Messages} height={15} width={18} alt='icon' />
          <label
            style={{ fontSize: '10px', fontWeight: '500', color: '#787486' }}
          >
            12 Comments
          </label>
        </Box>

        <Box
          flexGrow={3}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '10px',
          }}
        >
          <Image src={Files} height={15} width={18} alt='icon' />
          <label
            style={{ fontSize: '10px', fontWeight: '500', color: '#787486' }}
          >
            0 files
          </label>
        </Box>
      </Box>
    </Card>
  );
};
