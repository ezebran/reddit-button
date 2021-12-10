import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Layout } from '@/components/layout/Layout'
import { RecordsContainer, RecordHead } from '@/styles/RecordsStyles'
import { RecordSingle } from '@/styles/RecordsStyles'

export default function RecordsLoader() {
    return(
        <Layout>
        <RecordsContainer>
          <RecordHead>
            <h3>User rankings colors</h3>
          </RecordHead>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>

          <RecordSingle>
            <Skeleton height={16} width={150} />
          </RecordSingle>
  
        </RecordsContainer>
        
      </Layout>
    );
}