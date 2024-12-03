import Change20241203 from './change-20241203/Change20241203.tsx';
import { Space } from '@douyinfe/semi-ui';

export function ChangeLogsPage() {
  return (
    <Space style={{ width: '100%' }}>
      <Space
        vertical
        style={{
          width: '80%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'antiquewhite',
        }}
        spacing={40}
      >
        <h1>Change logs</h1>
        <Change20241203 />
      </Space>
    </Space>
  );
}
