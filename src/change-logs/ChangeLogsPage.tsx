import Change20241203 from './change-20241203/Change20241203.tsx';
import { Space } from '@douyinfe/semi-ui';
import Change20240905 from './change-20240905/Change20240905.tsx';

export function ChangeLogsPage() {
  return (
    <Space
      style={{
        width: '100%',
        marginBottom: '50px',
      }}
    >
      <Space
        vertical
        style={{
          width: '80%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px',
          paddingBottom: '140px',
          backgroundColor: '#fcfcfc',
        }}
        spacing={40}
      >
        <Change20241203 />
        <Change20240905 />
      </Space>
    </Space>
  );
}
