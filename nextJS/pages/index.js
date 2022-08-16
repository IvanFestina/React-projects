import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className={'navbar'}>
                <Link href='/'><a className='link'>Main</a></Link>
                <Link href='/users'><a className='link'>Users</a></Link>
            </div>
            <h1>Main Page</h1>
            <style jsx>
                {`
                  .navbar {
                    padding: 15px;
                    background: #607b71;
                  }

                  .link {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    margin: 10px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;