## Ansible for AWS

- Configuration Management of VPC (Virtual Private Cloud)
- Automatic Setup
- Centralize Change Management
- Version Control (IaaC)

### Architecture

- Bastion Host (and its security group): it is the single point of entry into our VPC from The Internet.

- Each Availability Zone consists of:

  - Public Subnet
    - Route Table
    - VPC NAT gateway
  - Private Subnet
    - Route Table
    - Amazon EC2 instances

- Internet gateway: communicates all the availability zones. 

- Boto: Python module that reletes the Ansible code with the VPC. 
NOT SURE
